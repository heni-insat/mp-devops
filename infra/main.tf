variable "git_repo_url" {
  type = string
  default = "https://github.com/heni-insat/mp-devops.git"
}

variable "git_repo_branch" {
  type    = string
  default = "main"
}


resource "helm_release" "argocd" {
  name = "argocd"

  repository       = "https://argoproj.github.io/argo-helm"
  chart            = "argo-cd"
  namespace        = "argocd"
  create_namespace = true
  version          = "3.35.4"

  values = [file("values/argocd.yaml")]
}

resource "kubernetes_manifest" "argocd_application" {
  depends_on = [helm_release.argocd]

  manifest = yamldecode(<<-EOF
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: mp-devops-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: "${var.git_repo_url}"
    targetRevision: "${var.git_repo_branch}"
    path: "infra/manifests"
  destination:
    server: https://kubernetes.default.svc
    namespace: "default"
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
EOF
  )
}