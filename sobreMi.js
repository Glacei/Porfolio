const traducciones = {
    es: {
        titular: "Sobre Adrian Vazquez",
        subtitulo1: "Un poco sobre mi",
        textoSobreMi: `Mi nombre es Adrian Vazquez Cabezas, naci en Reus un 9 de Mayo de 2006 y desde pequeño 
        siempre me ha interesado la tecnologia, desde los videojuegos que tanto jugaba, hasta el funcionamiento de un ordenador,
        esto hizo que cuando estaba apunto de acabar la ESO, decidiera cursar el bachillerato tecnologico debido a que no sabia en que campo
        especializarme, cuando acabe este supe que el entorno que mas me interesaba era el de la programacion, decantandome asi por un 
        superior de programacion de aplicaciones multiplataforma, que estoy cursando ahora.`,
       
        subtitulo2: "Conocimientos",
        textoConocimientos: `En cuanto a lenguajes de programacion, se utilizar Java, PHP, HTML, CSS y SQL. Luego otros que se utilizar aunque 
        no con tanta confianza son C#, Visual Basic .NET y JavaScript.<br><br>

        Se utilizar algunas entornos de desarrollo como Eclipse, Visual Studio Code, GitHub, HeidiSQL, Visual Studio
        2022, ademas de manejarme bien con algunas aplicaciones como son Photoshop, Premiere, Krita, VirtualBox, UML, Blender y Aesprite.`,
        
        subtitulo3: "Habiliades",
        textoHabilidades: `Puedo trabajar tanto en equipo como en solitario, aprendo muy rapido cuando me interesa el tema, me gusta mantener
        un ambiente positivo en mi entorno de trabajo y tengo ganas de aprender el mundo laboral. 
        Tambien me considero bastante responsable y se me da bien resolver problemas. <br><br>

        Cuando un tema me apasiona, me gusta profundizar en este y aprender todo sobre él.`,

        subtitulo4: "Redes y contacto",
        textoRedes: `Pueden contactarme por mail: adrivc890@gmail.com <br><br>
        Tambien me pueden contactar por Twitter/X : <a class = "enlacesRedes" href="https://x.com/ThatFei" target = "_blank">@ThatFei</a>
        <br><br>
        Tambien dejo por aqui mi GitHub: <a class = "enlacesRedes" href = "https://github.com/Glacei" target ="_blank">Glacei</a>`

    }, 

    cat: {
    titular: "Sobre Adrian Vazquez",
    subtitulo1: "Una mica sobre mi",
    textoSobreMi: `El meu nom és Adrian Vazquez Cabezas, vaig néixer a Reus el 9 de maig de 2006 i des de petit 
    sempre m'ha interessat la tecnologia, des dels videojocs que tant jugava, fins al funcionament d'un ordinador.
    Això va fer que quan estava a punt d'acabar l'ESO, decidís cursar el batxillerat tecnològic perquè no sabia en quin camp
    especialitzar-me, i quan vaig acabar, vaig adonar-me que l'entorn que més m'interessava era el de la programació, decantant-me així per un 
    cicle superior de programació d'aplicacions multiplataforma, que estic cursant ara.`,
    subtitulo2: "Coneixements",
    textoConocimientos: `Quant a llenguatges de programació, sé utilitzar Java, PHP, HTML, CSS i SQL. Altres que utilitzo encara que 
    no amb tanta confiança són C#, Visual Basic .NET i JavaScript.<br><br>

    Sé utilitzar alguns entorns de desenvolupament com Eclipse, Visual Studio Code, GitHub, HeidiSQL, Visual Studio
    2022, a més de manejar-me bé amb algunes aplicacions com Photoshop, Premiere, Krita, VirtualBox, UML, Blender i Aesprite.`,
    subtitulo3: "Habilitats",
    textoHabilidades: `Puc treballar tant en equip com en solitari, aprenc molt ràpid quan m'interessa el tema, m'agrada mantenir
    un ambient positiu al meu entorn de treball i tinc ganes d'aprendre del món laboral. 
    També em considero força responsable i se'm dóna bé resoldre problemes. <br><br>

    Quan un tema m'apassiona, m'agrada aprofundir-hi i aprendre tot sobre ell.`,
    subtitulo4: "Xarxes i contacte",
    textoRedes: `Podeu contactar-me per mail: adrivc890@gmail.com <br><br>
    També em podeu contactar per Twitter/X : <a class="enlacesRedes" href="https://x.com/ThatFei" target="_blank">@ThatFei</a>
    <br><br>
    També deixo aquí el meu GitHub: <a class="enlacesRedes" href="https://github.com/Glacei" target="_blank">Glacei</a>`
  },

  en: {
    titular: "About Adrian Vazquez",
    subtitulo1: "A little about me",
    textoSobreMi: `My name is Adrian Vazquez Cabezas, I was born in Reus on May 9, 2006 and since I was little 
    I have always been interested in technology, from the video games I used to play, to how computers work.
    This made me decide, when I was about to finish high school, to study the technological baccalaureate since I didn't know which field
    to specialize in, and when I finished, I realized that the environment that interested me the most was programming, thus choosing a 
    higher degree in multiplatform application programming, which I am currently studying.`,
    subtitulo2: "Skills",
    textoConocimientos: `Regarding programming languages, I know how to use Java, PHP, HTML, CSS, and SQL. Others that I use, though 
    not as confidently, are C#, Visual Basic .NET, and JavaScript.<br><br>

    I am familiar with some development environments such as Eclipse, Visual Studio Code, GitHub, HeidiSQL, Visual Studio
    2022, and also with some applications like Photoshop, Premiere, Krita, VirtualBox, UML, Blender, and Aseprite.`,
    subtitulo3: "Abilities",
    textoHabilidades: `I can work both in a team and alone, I learn very quickly when I am interested in the topic, I like to maintain
    a positive environment at work and I am eager to learn about the professional world. 
    I also consider myself responsible and good at problem-solving. <br><br>

    When I am passionate about a subject, I like to go in depth and learn everything about it.`,
    subtitulo4: "Socials & Contact",
    textoRedes: `You can contact me by email: adrivc890@gmail.com <br><br>
    You can also contact me on Twitter/X: <a class="enlacesRedes" href="https://x.com/ThatFei" target="_blank">@ThatFei</a>
    <br><br>
    Here is my GitHub: <a class="enlacesRedes" href="https://github.com/Glacei" target="_blank">Glacei</a>`
  }

};

    function cambiarIdioma(idioma) {
      console.log("Idioma seleccionado:", idioma);
      document.getElementById("titular").innerHTML = traducciones[idioma].titular;
      document.getElementById("subtitulo1").innerHTML = traducciones[idioma].subtitulo1;
      document.getElementById("textoSobreMi").innerHTML = traducciones[idioma].textoSobreMi;
      document.getElementById("subtitulo2").innerHTML = traducciones[idioma].subtitulo2;
      document.getElementById("textoConocimientos").innerHTML = traducciones[idioma].textoConocimientos;
      document.getElementById("subtitulo3").innerHTML = traducciones[idioma].subtitulo3;
      document.getElementById("textoHabilidades").innerHTML = traducciones[idioma].textoHabilidades;
      document.getElementById("subtitulo4").innerHTML = traducciones[idioma].subtitulo4;
      document.getElementById("textoRedes").innerHTML = traducciones[idioma].textoRedes;
    }






