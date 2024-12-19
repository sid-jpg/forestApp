# Flutter App Structure for Forest Fire Prediction System

## Overview
This document outlines the basic structure of a Flutter app that connects to the Forest Fire Prediction System backend.

## Components

1. **Main.dart**: The entry point of the application.
   - Initializes the app and sets up routing.

2. **Home Screen**: Displays an interactive map and options to check fire risk.
   - Integrates with the backend to fetch risk data based on user input (latitude and longitude).

3. **Risk Assessment Screen**: Shows the risk assessment results.
   - Displays messages based on the location type (water body, non-forest area).
   - Shows the city name and risk assessment results.

4. **Notifications**: Implements push notifications for alerts.
   - Uses Firebase Cloud Messaging (FCM) for real-time alerts.

5. **Admin Panel**: A separate section for administrative tasks.
   - Allows admins to manage models, send alerts, and monitor system performance.

## Dependencies
- `http`: For making API calls to the backend.
- `firebase_messaging`: For handling push notifications.
- `flutter_map`: For displaying interactive maps.

## UI Design
- Use Material Design principles for a modern and responsive UI.
- Dark theme to match the web application.

## Conclusion
This structure provides a foundation for developing the Flutter app that will enhance user interaction with the Forest Fire Prediction System.
