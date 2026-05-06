// Ejercicio.js - Funciones interactivas para la página de ejercicios

function toggleHint(button) {
    const hintContent = button.nextElementSibling;
    const isShowing = hintContent.classList.contains('show');
    
    if (isShowing) {
        hintContent.classList.remove('show');
        button.textContent = 'Mostrar pista';
        button.style.background = 'transparent';
        button.style.color = 'var(--text-secondary)';
    } else {
        hintContent.classList.add('show');
        button.textContent = 'Ocultar pista';
        button.style.background = 'rgba(99, 102, 241, 0.1)';
        button.style.color = 'var(--primary-color)';
    }
}

function toggleSolution(button) {
    const solutionContent = button.nextElementSibling;
    const isShowing = solutionContent.classList.contains('show');
    
    if (isShowing) {
        solutionContent.classList.remove('show');
        button.textContent = 'Mostrar solución';
        button.style.background = 'transparent';
        button.style.color = 'var(--text-secondary)';
    } else {
        solutionContent.classList.add('show');
        button.textContent = 'Ocultar solución';
        button.style.background = 'rgba(16, 185, 129, 0.1)';
        button.style.color = 'var(--success-color)';
    }
}

// Sistema de progreso
class ExerciseTracker {
    constructor() {
        this.total = document.querySelectorAll('.exercise-card').length;
        this.completed = 0;
        this.progressBar = document.getElementById('progressBar');
        this.progressText = document.getElementById('progressText');
        this.exercises = document.querySelectorAll('.exercise-card');
        
        this.init();
    }
    
    init() {
        // Cargar progreso guardado
        this.loadProgress();
        
        // Agregar event listeners a las soluciones
        this.exercises.forEach((exercise, index) => {
            const solutionToggle = exercise.querySelector('.solution-toggle');
            if (solutionToggle) {
                solutionToggle.addEventListener('click', () => {
                    // Pequeño delay para permitir que la animación complete
                    setTimeout(() => this.checkIfCompleted(index), 100);
                });
            }
        });
    }
    
    checkIfCompleted(exerciseIndex) {
        const solutionContent = this.exercises[exerciseIndex].querySelector('.solution-content');
        if (solutionContent && solutionContent.classList.contains('show')) {
            this.completed++;
            this.updateProgress();
            this.saveProgress();
        }
    }
    
    updateProgress() {
        const percentage = (this.completed / this.total) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = percentage + '%';
        }
        if (this.progressText) {
            this.progressText.textContent = `${this.completed}/${this.total}`;
        }
    }
    
    saveProgress() {
        localStorage.setItem('recursionCourseProgress', this.completed);
    }
    
    loadProgress() {
        const saved = localStorage.getItem('recursionCourseProgress');
        if (saved) {
            this.completed = parseInt(saved, 10);
            this.updateProgress();
        }
    }
    
    resetProgress() {
        this.completed = 0;
        this.updateProgress();
        localStorage.removeItem('recursionCourseProgress');
    }
}

// Funciones utilitarias para verificar respuestas (ejecución en consola)

function verifyContadorPersonalizado() {
    console.log('=== Verificación: Contador Personalizado ===');
    const tests = [
        { args: [1, 5], expected: [1,2,3,4,5] },
        { args: [3, 7], expected: [3,4,5,6,7] },
        { args: [5, 3], expected: [] }
    ];
    
    tests.forEach((test, i) => {
        console.log(`Test ${i + 1}: contadorPersonalizado(${test.args})`);
    });
    console.log('Implementa la función y prueba manualmente con console.log.');
}

function verifySumaDigitos() {
    console.log('=== Verificación: Suma de Dígitos ===');
    console.log('Pruebas: sumaDigitos(1234) → 10');
    console.log('Pruebas: sumaDigitos(999) → 27');
    console.log('Pruebas: sumaDigitos(5) → 5');
    console.log('Prueba con números negativos también.');
}

function verifyPotencia() {
    console.log('=== Verificación: Potencia ===');
    console.log('potencia(2, 5) → 32');
    console.log('potencia(3, 3) → 27');
    console.log('potencia(5, 0) → 1');
    console.log('Recuerda: cualquier número a la 0 es 1');
}

function verifyProductoRango() {
    console.log('=== Verificación: Producto Rango ===');
    console.log('productoRango(2, 5) → 120');
    console.log('productoRango(1, 5) → 120');
    console.log('productoRango(3, 3) → 3');
}

function verifyContarVocales() {
    console.log('=== Verificación: Contar Vocales ===');
    console.log('contarVocales("recursividad") → 5');
    console.log('contarVocales("Hola Mundo") → 4');
    console.log('contarVocales("xyz") → 0');
}

function verifyInvertirArray() {
    console.log('=== Verificación: Invertir Array ===');
    console.log('invertirArray([1,2,3,4]) → [4,3,2,1]');
    console.log('invertirArray(["a","b","c"]) → ["c","b","a"]');
    console.log('invertirArray([]) → []');
}

function verifyContarMultiplos3() {
    console.log('=== Verificación: Contar Múltiplos 3 ===');
    console.log('contarMultiplos3(10) → 3');
    console.log('contarMultiplos3(15) → 5');
    console.log('contarMultiplos3(2) → 0');
}

function verifyContarPares() {
    console.log('=== Verificación: Contar Pares ===');
    console.log('contarParesFacil([1,2,3,4,5,6]) → 3');
    console.log('contarParesFacil([2,4,6,8]) → 4');
    console.log('contarParesFacil([1,3,5]) → 0');
}

function verifyPalindrome() {
    console.log('=== Verificación: Palindrome ===');
    console.log('esPalindrome("reconocer") → true');
    console.log('esPalindrome("ana") → true');
    console.log('esPalindrome("hola") → false');
    console.log('esPalindrome("A man a plan") → true');
}

function verifySumaAcumulativa() {
    console.log('=== Verificación: Suma Acumulativa ===');
    console.log('sumaAcumulativa(5) → 15');
    console.log('sumaAcumulativa(10) → 55');
    console.log('sumaAcumulativa(100) → 5050');
}

// Inicializar tracker cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el tracker de progreso
    if (document.getElementById('progressBar')) {
        new ExerciseTracker();
    }
    
    // Agregar estilos adicionales al hacer clic en botones
    const buttons = document.querySelectorAll('.hint-toggle, .solution-toggle');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Animar suavemente
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

// Exportar funciones para debugging (si se usan en consola)
window.verifyExercises = {
    contador: verifyContadorPersonalizado,
    sumaDigitos: verifySumaDigitos,
    potencia: verifyPotencia,
    producto: verifyProductoRango,
    vocales: verifyContarVocales,
    invertir: verifyInvertirArray,
    multiplos: verifyContarMultiplos3,
    pares: verifyContarPares,
    palindrome: verifyPalindrome,
    suma: verifySumaAcumulativa
};
