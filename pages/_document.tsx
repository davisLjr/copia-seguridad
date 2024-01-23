// pages/_document.js
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Coloca aquí las fuentes y estilos de iconos que necesites */}
          <title>Editor Obelisco</title>

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Esta pagina es una herramienta para probar los componentes de la libreria de obelisco en tiempo real, de manera que mediante el editor de codigo online puedas editar y visualizar los componentes antes de usarlos."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Coloca aquí los scripts de jQuery, Popper.js y Bootstrap */}
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            // @ts-ignore
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
