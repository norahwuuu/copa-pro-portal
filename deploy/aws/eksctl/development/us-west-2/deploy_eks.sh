#!/bin/sh

set -xe

NAMESPACE=development
SERVICE_NAME=pro-portal-v1
DOCKER_IMAGE=927876825924.dkr.ecr.us-west-2.amazonaws.com/pro-portal:v1.0.0.5ca857254bfe2586595354e5f4f80027d7a7bc7a.20221102_224645Z
# kubectl config set-context --current --namespace=$NAMESPACE


#Setup service
deployment=`kubectl get deploy | grep $SERVICE_NAME | wc -l`
if [ $deployment -eq 0 ];then
    kubectl apply -f deployment.yml
fi

service=`kubectl get svc | grep $SERVICE_NAME | wc -l`
if [ $service -eq 0 ];then
    kubectl apply -f service.yml
fi

kubectl set image deployment/$SERVICE_NAME $SERVICE_NAME=$DOCKER_IMAGE  --record

kubectl rollout status -w deployment $SERVICE_NAME