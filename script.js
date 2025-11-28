// script.js
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const helpBtn = document.getElementById('helpBtn');
    const tutorialContainer = document.getElementById('tutorialContainer');
    const closeTutorialBtn = document.getElementById('closeTutorialBtn');
    
    // Download do arquivo
    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'app.exe';
        link.download = 'Analise_Desempenho.exe';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showDownloadFeedback();
    });
    
    // Mostrar tutorial
    helpBtn.addEventListener('click', function() {
        tutorialContainer.classList.add('show');
        // Rola suavemente até o tutorial
        tutorialContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // Fechar tutorial
    closeTutorialBtn.addEventListener('click', function() {
        tutorialContainer.classList.remove('show');
        // Rola de volta para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Fechar tutorial clicando fora (opcional)
    document.addEventListener('click', function(event) {
        if (tutorialContainer.classList.contains('show') && 
            !tutorialContainer.contains(event.target) && 
            event.target !== helpBtn) {
            tutorialContainer.classList.remove('show');
        }
    });
    
    function showDownloadFeedback() {
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '✅ Download Iniciado!';
        downloadBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
        
        setTimeout(() => {
            downloadBtn.innerHTML = originalText;
            downloadBtn.style.background = 'linear-gradient(135deg, #8c52ff, #5ce1e6)';
        }, 2000);
        
        console.log('Download solicitado em: ' + new Date().toLocaleString());
    }
    
    // Efeito de digitação no título (opcional)
    function typeWriterEffect() {
        const title = document.querySelector('.header h1');
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
    
    // Descomente a linha abaixo se quiser o efeito de digitação
    // typeWriterEffect();
});