export interface Gajo {
    color: string;
    borderColor: string; // Nuevo campo para el color del borde
    tipo: 'premio' | 'no-toca' | 'vuelve-a-tirar' | 'prize-moment';
    titulo?: string;
    descripcion?: string;
    icono?: string;
}
