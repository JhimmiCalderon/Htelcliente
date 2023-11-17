export function Ubicacion() {
    return (
        <>
            <section className="my-5">
                <h1 className="fst-italic">Nuestra Ubicación</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15290708.577647315!2d-122.87109375000004!3d20.666195922002338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af3037c2d5cb%3A0x390f4531ec6da77!2sHotel%20Transilvania!5e0!3m2!1ses!2sco!4v1700227918307!5m2!1ses!2sco"
                    width={700}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </section>
        </>
    )
}