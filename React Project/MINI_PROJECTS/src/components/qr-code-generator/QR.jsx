import { useState } from "react"
import QRCode from "react-qr-code"


export default function QrCodeGen() {

    let [qrCode, setQrCode] = useState("");
    let [input, setInput] = useState("");
    function handleGenerateQrCode() {
        setQrCode(input);
    }

    return (

        <div style={{ backgroundColor: "gray", display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }} >
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text" name="qr-code" placeholder="Enter Your Value Here" />
                <button disabled={input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="gray" />
            </div>
        </div>
    )
}