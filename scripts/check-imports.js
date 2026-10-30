import fs from 'fs';
import path from 'path';

function checkJsx(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkJsx(full);
    } else if (f.endsWith('.jsx')) {
      const code = fs.readFileSync(full, 'utf8');
      const match = code.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
      if (match) {
        const imported = match[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0]).filter(Boolean);
        const tags = [...code.matchAll(/<([A-Z][a-zA-Z0-9]+)/g)].map(m => m[1]);
        const commonIcons = [
          'Users', 'Target', 'Diamond', 'Layers', 'Building2', 'HardHat', 'Mail', 'MapPin', 
          'Check', 'CheckCircle2', 'Clock', 'Search', 'Filter', 'X', 'FileText', 'FileSpreadsheet', 
          'ArrowRight', 'ChevronRight', 'ChevronDown', 'Menu', 'Eye', 'Coins', 'Store', 'Warehouse', 
          'Ruler', 'FileCheck', 'Scale', 'ShieldCheck', 'Info', 'AlertCircle', 'Loader2', 'ExternalLink', 
          'BookOpen', 'TrendingUp', 'FolderCheck', 'BarChart3', 'ShieldAlert', 'BarChart', 'Handshake', 
          'Home', 'Calculator', 'UploadCloud', 'Building', 'Hammer', 'Wrench', 'Calendar', 'Maximize2'
        ];
        for (const t of tags) {
          if (commonIcons.includes(t)) {
            const hasLocalDef = code.includes(`const ${t}`) || code.includes(`function ${t}`) || code.includes(`class ${t}`) || code.includes(`import ${t}`) || imported.includes(t);
            if (!hasLocalDef) {
              console.log(`${f}: Missing Lucide icon "${t}"`);
            }
          }
        }
      }
    }
  }
}

checkJsx('src');
console.log('Finished checking JSX imports.');
