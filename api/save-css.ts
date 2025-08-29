import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cssRules } = req.body;
    
    if (!cssRules || typeof cssRules !== 'string') {
      return res.status(400).json({ error: 'Invalid CSS rules' });
    }

    // Path to index.css
    const cssFilePath = path.join(process.cwd(), 'src', 'index.css');
    
    // Read existing CSS
    const existingCss = fs.existsSync(cssFilePath) 
      ? fs.readFileSync(cssFilePath, 'utf-8') 
      : '';
    
    // Check if editor rules section exists
    const editorSectionRegex = /\/\* EDITOR GENERATED CENTERING RULES \*\/[\s\S]*?(?=\/\*|$)/;
    const hasEditorSection = editorSectionRegex.test(existingCss);
    
    let newCss;
    if (hasEditorSection) {
      // Replace existing editor section
      newCss = existingCss.replace(
        editorSectionRegex, 
        `/* EDITOR GENERATED CENTERING RULES */\n${cssRules}\n\n`
      );
    } else {
      // Append new editor section
      newCss = `${existingCss}\n\n/* EDITOR GENERATED CENTERING RULES */\n${cssRules}\n`;
    }
    
    // Write back to file
    fs.writeFileSync(cssFilePath, newCss, 'utf-8');
    
    res.status(200).json({ success: true, message: 'CSS rules saved successfully' });
  } catch (error) {
    console.error('Error saving CSS:', error);
    res.status(500).json({ error: 'Failed to save CSS rules' });
  }
}