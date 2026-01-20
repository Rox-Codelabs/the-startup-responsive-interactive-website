# README – Label Vier cases
Voor deze opdracht heb ik de cases-functionaliteit van labelvier.nl nagemaakt. Het doel was om het ontwerp en de functionaliteit van de huidige website te behouden, maar alles opnieuw op te bouwen met eigen HTML, CSS en JavaScript.

De focus lag niet alleen op het visueel kopiëren van de pagina’s, maar vooral op het verbeteren van de HTML-structuur. De website is opgebouwd met zo veel mogelijk semantische HTML5-elementen, zodat de structuur netter, logischer en beter aansluit op moderne webstandaarden.


<img width="1918" height="787" alt="image" src="https://github.com/user-attachments/assets/423bc35d-2e89-4dff-853e-d6f8b5b38d01" />







<img width="100" height="100" alt="url_qrcodecreator com_10_06_17" src="https://github.com/user-attachments/assets/f73af81a-82f0-4c34-b2e4-d55f1cc20c56" />
Bekijk de website ook op je mobiel



## Kenmerken

### Breakout-a (klikbare article cards)


Ik heb het hele artikel klikbaar gemaakt door een ::after toe te voegen aan de <a> en deze over de volledige article-card te laten vallen. Daardoor zijn zowel de tekst als de afbeelding klikbaar. Alle hover-effecten, zoals de animatie op de h2, het “lees meer”-pijltje en de lichte opacity-verandering van de visual, worden geactiveerd zodra je ergens over de article-card hovert.

<img width="200" height="400" alt="Image 55" src="https://github.com/user-attachments/assets/2ac0b8c0-ad82-472e-9120-2f05a65f7659" />



### Lower footer (scroll-animatie)

De lower footer met de nieuwsbriefinschrijving heeft een animatie die activeert wanneer je helemaal naar beneden scrollt. Op het moment dat de scrollpositie plus de hoogte van de viewport gelijk is aan de totale paginahoogte, wordt via JavaScript een footer-scroll class toegevoegd. Deze class zorgt voor een opacity-verandering en een subtiele verschuiving over de Y-as, waardoor de footer van onderen het beeld in schuift.

<img width="200" height="400" alt="Image 58" src="https://github.com/user-attachments/assets/61bb23a8-d428-40e2-a05b-f37654460cc2" />



### Hamburger menu (navigatie & submenu’s)

Het hamburger menu bevat meerdere interacties: een animatie bij het openen van de navigatie, uitklapbare submenu’s met bijbehorende animaties en een meebewegend icoontje. Daarnaast zijn er hover-effecten toegevoegd voor extra feedback. Deze navigatie is getest met twee user tests en op basis daarvan verder verbeterd. [Lees hier](https://github.com/Rox-Codelabs/the-startup-responsive-interactive-website/issues/8) meer over de interactie en de user test.

<img width="200" height="400" alt="Image 56" src="https://github.com/user-attachments/assets/63cc3ab9-31fe-49c3-abbe-dfde633e3992" /><img width="200" height="400" alt="Image 57" src="https://github.com/user-attachments/assets/911412ee-9b2a-49a4-acd3-047af550ba00" />



## Bronnen
https://arpit-batri.medium.com/fitts-law-in-ui-ux-design-41fe6e71aa23
https://piccalil.li/blog/create-a-semantic-break-out-button-to-make-an-entire-element-clickable/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


