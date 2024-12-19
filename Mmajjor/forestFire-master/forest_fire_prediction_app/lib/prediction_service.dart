import 'dart:convert';
import 'package:http/http.dart' as http;

class PredictionService {
  final String baseUrl;

  PredictionService(this.baseUrl);

  Future<void> makePrediction(double latitude, double longitude) async {
    final String url = '\$baseUrl/predict'; // Replace with your deployed Flask URL

    try {
      final response = await http.post(
        Uri.parse(url),
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.encode({
          'lat': latitude,
          'lon': longitude,
        }),
      );

      if (response.statusCode == 200) {
        // Parse the response if needed
        final data = json.decode(response.body);
        print('Prediction data: \\$data');
      } else {
        print('Error: \\$response.statusCode');
      }
    } catch (e) {
      print('Failed to make prediction: \\$e');
    }
  }
}
