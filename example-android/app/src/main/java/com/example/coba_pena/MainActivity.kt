package com.example.coba_pena

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import dev.privyid.pena.Payload
import dev.privyid.pena.Pena
import dev.privyid.pena.Placement

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val pena = findViewById<Pena>(R.id.pena)
        pena.openDoc(
            url = "YOUR_DOCUMENT_URL",
            signature = Placement(
                x = 10,
                y = 10,
                page = 1,
                fixed = false
            ),
            onAfterAction = this::afterAction
        )
    }

    private fun afterAction(payload: Payload) {
        Toast.makeText(this, payload.action, Toast.LENGTH_SHORT).show()
    }
}
