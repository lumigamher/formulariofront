function FormComponent() {
    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.textContent = 'Formulario de Registro';

    const form = document.createElement('form');
    form.id = 'registerForm';

    const fields = [
        { label: 'Nombre', type: 'text', id: 'firstName' },
        { label: 'Apellido', type: 'text', id: 'lastName' },
        { label: 'Profesión', type: 'text', id: 'profession' },
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        input.required = true;

        form.appendChild(label);
        form.appendChild(input);
    });

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Registrar';

    form.appendChild(button);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            nombre: form.firstName.value,
            apellido: form.lastName.value,
            profesion: form.profession.value
        };

        try {
            const response = await fetch('/api/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Registro exitoso');
                form.reset();
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error en el registro');
        }
    });

    container.appendChild(title);
    container.appendChild(form);

    return container;
}

export default FormComponent;
