"""Deprecated import support. Auto-generated by import_shims/generate_shims.sh."""
# pylint: disable=redefined-builtin,wrong-import-position,wildcard-import,useless-suppression,line-too-long

from import_shims.warn import warn_deprecated_import

warn_deprecated_import('discussion.management.commands.show_permissions', 'lms.djangoapps.discussion.management.commands.show_permissions')

from lms.djangoapps.discussion.management.commands.show_permissions import *
