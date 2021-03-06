# Copyright 2017 Workonline Communications (Pty) Ltd. All rights reserved.
#
# The contents of this file are licensed under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with the
# License. You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under
# the License.
"""URL definitions for djangolg."""

from __future__ import print_function
from __future__ import unicode_literals

from django.conf.urls import url

from djangolg import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name="djangolg-index"),
    url(r'^enter/$', views.AcceptTermsView.as_view(), name="djangolg-enter"),
    url(r'^lg/$', views.LookingGlassJsonView.as_view(), name="djangolg-lg"),
]
