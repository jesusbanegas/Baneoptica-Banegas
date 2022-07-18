import GraduadasCuadradas from '../assets/img/GraduadasCuadradas.jpg';
import GraduadasNerd from '../assets/img/GraduadasNerd.jpg';
import SolAviador from '../assets/img/SolAviador.jpg';
import SolRedondas from '../assets/img/SolRedondas.jpg';
import LentillasDiarias from '../assets/img/LentillasDiarias.jpg';
import LentillasSolucion from '../assets/img/LentillasSolucion.jpg';


const products = [
    {
        id:1,
        name:'Graduadas Cuadradas',
        price:105,
        stock:20,
        img: GraduadasCuadradas,
        category:'GafasGraduadas',
        description:'Gafas graduadas clasicas de forma cuadrada, con montura negra de grosor 5mm.',
    },
    {
        id:2,
        name:'Graduadas Redondas',
        price:78,
        stock:14,
        img: GraduadasNerd,
        category:'GafasGraduadas',
        description:'Gafas graduadas redondas estilo nerd, con montura ancha de color negra y gris. #nerds4life!',
    },
    {
        id:3,
        name:'Gafas de sol de tipo aviador',
        price:150,
        stock:32,
        img: SolAviador,
        category:'GafasSol',
        description:'Gafas de sol estilo aviador con color de montura gris y color de cristal azul, para los más veteranos.',
    },
    {
        id:4,
        name:'Gafas de sol redondas',
        price:132,
        stock:22,
        img: SolRedondas,
        category:'GafasSol',
        description:'Gafas de sol estilo redondas, con color de montura negra y color de cristal morado, se ven bien cool cierto?',
    },
    {
        id:5,
        name:'Lentillas Diarias',
        price:30,
        stock:58,
        img: LentillasDiarias,
        category:'Lentillas',
        description:'Lentes de contacto diarias de gran comodidad, con solución de agua en la superficie superior al 80%.',
    },
    {
        id:6,
        name:'Solución para lentillas',
        price:65,
        stock:13,
        img: LentillasSolucion,
        category:'Lentillas',
        description:'Lágrima artificial diseñada para proporcionar protección, hidratación, y lubricación en el ojo seco.',
    },
];

export default products