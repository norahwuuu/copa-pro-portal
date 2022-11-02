#!/bin/sh

set -xe

NAMESPACE=development
SERVICE_NAME=user-service-v1
DOCKER_IMAGE=927876825924.dkr.ecr.us-west-2.amazonaws.com/user-service:v1.0.0.c3abb63e7c8855cf02c6c598f249a7f027caa7cc.20221102_152626Z
# kubectl config set-context --current --namespace=$NAMESPACE


#Setup service
deployment=`kubectl get deploy | grep $SERVICE_NAME | wc -l`
if [ $deployment -eq 0 ];then
    kubectl apply -f deploy/aws/eksctl/$NAMESPACE/us-west-2/deployment.yml
fi

service=`kubectl get svc | grep $SERVICE_NAME | wc -l`
if [ $service -eq 0 ];then
    kubectl apply -f deploy/aws/eksctl/$NAMESPACE/us-west-2/service.yml
fi

kubectl set image deployment/$SERVICE_NAME $SERVICE_NAME=$DOCKER_IMAGE  --record

kubectl rollout status -w deployment $SERVICE_NAME