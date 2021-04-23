#!/bin/bash

#update assets as edxapp user
sudo -H -u edxapp bash << EOF
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production --debug
paver update_assets cms --settings=production --debug
python manage.py cms --settings=production collectstatic --noinput
python manage.py lms --settings=production collectstatic --noinput
EOF

# restart lms instance
sudo /edx/bin/supervisorctl restart lms
sudo /edx/bin/supervisorctl restart cms


