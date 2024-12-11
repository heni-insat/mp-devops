provider "kubernetes" {
  config_path    = "C:/Users/heniy/.kube/config"
  config_context = "minikube"
}

provider "helm" {
  kubernetes {
    config_path    = "C:/Users/heniy/.kube/config"
    config_context = "minikube"
  }
}
