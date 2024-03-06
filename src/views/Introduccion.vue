<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 En estos tiempos, la planeación orienta el progreso de la empresa a través de la estipulación del manejo de los recursos, la definición de objetivos y la formulación de los diferentes programas que, a su vez, proporcionan el marco y la dirección para la planificación de nivel inferior, contribuyendo al manejo eficiente y eficaz de la empresa para que esta pueda ser competitiva y permanente en el mercado. El siguiente video presenta, de forma general, las temáticas a desarrollar en este componente de gestión administrativa.

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rENNGAnzMBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
