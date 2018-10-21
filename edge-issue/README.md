# Thud - Edge Issue!

This is a repo to help test/diagnose/debug a problem with Microsoft Edge.

Edge does not serve a cached 204 response to Axios, but instead serves the most recent 200 response that it has cached.
