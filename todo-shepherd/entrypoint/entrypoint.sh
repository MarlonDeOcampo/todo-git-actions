#!/bin/sh

export REGISTRY_USER=$(cat /run/secrets/registry_user)
export REGISTRY_PASSWORD=$(cat /run/secrets/registry_password)

exec "$@"