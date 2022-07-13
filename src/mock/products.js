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
        description:'',
    },
    {
        id:2,
        name:'Graduadas Nerd',
        price:78,
        stock:14,
        img: GraduadasNerd,
        category:'GafasGraduadas',
        description:'',
    },
    {
        id:3,
        name:'Gafas de sol de tipo aviador',
        price:150,
        stock:32,
        img: SolAviador,
        category:'GafasSol',
        description:'',
    },
    {
        id:4,
        name:'Gafas de sol redondas',
        price:132,
        stock:22,
        img: SolRedondas,
        category:'GafasSol',
        description:'',
    },
    {
        id:5,
        name:'Lentillas Diarias',
        price:30,
        stock:58,
        img: LentillasDiarias,
        category:'Lentillas',
        description:'',
    },
    {
        id:6,
        name:'Solución para lentillas',
        price:65,
        stock:13,
        img: LentillasSolucion,
        category:'Lentillas',
        description:'',
    },
];

export default products