export default function MapEmbed() {
    return (
        <div className="w-full h-72">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.529990286153!2d20.35391777601628!3d51.11713143913947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719ce66891cf4b5%3A0x23d505583f98d34!2sWeso%C5%82e%20Miasteczko%20%26%20Bawialnia%20Sielpia!5e0!3m2!1spl!2spl!4v1747305535894!5m2!1spl!2spl" // ← Wklej tu swój kod Google Maps
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Wesołego Miasteczka"
            />
        </div>
    );
}