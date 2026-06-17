type SectionTitleProps = {
    title: string;
}

{/* creacion de componenete reutilizable para el titulo de secciones */ }
export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="text-3xl font-bold mb-6">
            {/* muestra el valor de la prop 'title' */}
            {title}
        </h2>
    );
}