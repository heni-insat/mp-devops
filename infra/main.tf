terraform {
  required_version = ">= 1.0.0"
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.8"
    }
  }
}

provider "kubernetes" {
  # Assumes your kubeconfig context points to minikube
  # If needed, specify config paths or contexts here
}

provider "helm" {
  kubernetes {
    # Same as above, relies on default KUBECONFIG
  }
}

variable "git_repo_url" {
  type = string
  default = "https://github.com/heni-insat/mp-devops.git" # Change this
}

variable "git_repo_branch" {
  type    = string
  default = "main"
}

resource "helm_release" "argocd" {
  name       = "argocd"
  namespace  = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  version    = "5.36.0"
  create_namespace = true

  # Minimal Argo CD installation; no custom values needed
  # For further customization, you could add `values` blocks here.
}

resource "kubernetes_manifest" "argocd_application" {
  depends_on = [helm_release.argocd]

  yaml_body = <<-EOF
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: hello-world-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: "${var.git_repo_url}"
    targetRevision: "${var.git_repo_branch}"
    path: "manifests"
  destination:
    server: https://kubernetes.default.svc
    namespace: "default"
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
EOF
}

output "argocd_info" {
  value = "Argo CD installed in 'argocd' namespace. To access: 'kubectl port-forward svc/argocd-server -n argocd 8080:443' and open https://localhost:8080"
}
