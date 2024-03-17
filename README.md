# Headless CMS Front end

This project contains the Front end of a video-game reviews' website. Its
purpose is to render layouts on the client side based on data received by
Strapi's API. You can access the project containing the Back end
[here](https://github.com/rudah-amaral/Headless-CMS-Back-end).

## What's a Headless CMS anyway?

Traditional CMSes couple the content with the view, limiting the user to create
layouts only with one of his platform's available templates. Cutting off the
"head" means to remove this highly coupled view and to provide direct access
to the underlying content through a REST API or GraphQL client.

This architecture empowers developers into implementing custom (and possibly
multiple) views while not having to mind the content itself, but only its shape.
Meanwhile, clients, editors, writers, etc. can focus only on the
content without depending on the development team.

## Credits

This project is a result from Net Ninja's code-along
[Strapi Crash Course (with React & GraphQL)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn).
My own modifications include using Vite instead of create-react-app as my
project scaffolder, TypeScript instead of JavaScript and adapting the code to
work with the dependencies latest releases.
