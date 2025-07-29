#!/usr/bin/env python3

import django
import requests
import yaml
import jinja2
import flask
import cryptography
from PIL import Image

def main():
    print("Test Python application")
    print(f"Django version: {django.get_version()}")
    print(f"Requests version: {requests.__version__}")
    print("This app uses several Python packages with known vulnerabilities for testing purposes")

if __name__ == "__main__":
    main()
