document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        const inputs = document.querySelectorAll('.controls input');
        console.log(inputs);

        const handleUpdate = (e) => {
            const element = e.srcElement;
            const suffix = element.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${element.name}`, element.value + suffix);
        }

        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    }
}