#!/bin/bash

#update assets as edxapp user
sudo -H -u edxapp bash << EOF
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets cms --settings=production --debug
EOF

# restart cms instance
sudo /edx/bin/supervisorctl restart cms

