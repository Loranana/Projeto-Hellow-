function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.918454753874204, lng: -49.068052935554725,  titulo: 'FENATIB', descricao: 'Festival Nacional de Teatro Infantil' },
        { lat: -26.915318483920696, lng:-49.084645677884765, titulo: 'BCX', descricao: 'Evento geek e pop' },
        { lat: -26.926473928376577, lng: -49.0641053319046, titulo: 'Semana da Conscienciologia', descricao: 'Fenomenos Parapsiquicos dia 1' },
        { lat: -26.92204739914508, lng: -49.05884715092689, titulo: '3a. Exposições', descricao: 'Exposição de arte' },
        { lat: -26.911757512325753, lng: -49.07144845092689, titulo: 'Dia do Mundial Rock', descricao: 'Show de rock com Charles Master' },
        { lat: -26.809708222795912, lng: -49.086978393254384, titulo: 'Sunset Container British Beer', descricao: 'Evento de cerveja com música ao vivo' },
        { lat: -26.92089203709035, lng: -49.06732748734681, titulo: 'Feira Brique de Blumenau', descricao: '“BRIQUE DE BLUMENAU Á FEIRA MAIS CHARMOSA DA CIDADE”' },

        { lat: -26.899432920264807, lng: -49.07566669510816,  titulo: 'Medieval in Norden', descricao: 'Um evento em parceria entre Norden Bar & Biergarten e Honning Hidroméis & Sidras' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}