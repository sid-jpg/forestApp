# Flutter App Integration with Forest Fire Prediction System

## Overview
This document outlines how to connect the Flutter app to the Forest Fire Prediction System backend, creating a centralized system for risk assessment and alerts.

## 1. Backend API Endpoints
Ensure the following endpoints are available in the Flask backend:
- **Risk Assessment Endpoint**: `/risk`
  - **Method**: POST
  - **Request Body**: `{ "lat": <latitude>, "lon": <longitude> }`
  - **Response**: `{ "city": <city_name>, "risk": <risk_message> }`

- **Admin Actions Endpoint**: `/admin`
  - **Method**: POST
  - **Request Body**: `{ "action": "update_model" }` or `{ "action": "send_alert" }`
  - **Response**: `{ "message": "Action completed successfully." }`

## 2. Flutter HTTP Requests
In the Flutter app, use the `http` package to make API calls:

### Example Code Snippet for Risk Assessment
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<void> assessRisk(double latitude, double longitude) async {
  final response = await http.post(
    Uri.parse('https://your-backend-url/risk'),
    headers: { 'Content-Type': 'application/json' },
    body: json.encode({ 'lat': latitude, 'lon': longitude }),
  );

  if (response.statusCode == 200) {
    final data = json.decode(response.body);
    print('City: ${data['city']}, Risk: ${data['risk']}');
  } else {
    throw Exception('Failed to load risk data');
  }
}
```

## 3. Push Notifications
Integrate Firebase Cloud Messaging (FCM) for real-time alerts:
- Set up FCM in your Flutter app by following the official documentation.
- Create a service in the Flask backend to send notifications when certain conditions are met.

## 4. Testing and Debugging
- Test all API endpoints using tools like Postman before integrating them into the Flutter app.
- Handle errors gracefully in the Flutter app to improve user experience.

## Conclusion
This integration will enable the Flutter app to communicate effectively with the Forest Fire Prediction System backend, providing users with timely risk assessments and alerts.
