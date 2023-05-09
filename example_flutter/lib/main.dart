import 'package:flutter/material.dart';
import 'package:pena_flutter/pena_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Pena(
      url: 'YOUR_DOCUMENT_URL',
      lang: 'en',
      signature: const Placement(x: 50, y: 100, page: 1),
      onAfterAction: (payload) {
        if (payload.action == 'sign') {
          print(payload.data);
        }
      },
    );
  }
}
