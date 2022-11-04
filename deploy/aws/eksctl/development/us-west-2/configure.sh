#!bin/bash

## Link the role.
eksctl create iamserviceaccount --name pro-portal-service-account --namespace development \
    --cluster dev-eks-core --role-name "pro-portal-service" \
    --attach-policy-arn arn:aws:iam::567198465365:policy/auth-role-eks-role --approve