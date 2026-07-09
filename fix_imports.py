import os, re
screens_dir = "/Users/ajitkumarpandit/Desktop/com.sailorprep.nakprc/sailorprep.nakprc/src/screens"

def remove_import(content, symbol):
    content = re.sub(r",\s*" + symbol + r"\b", "", content)
    content = re.sub(r"\b" + symbol + r"\s*,", "", content)
    content = re.sub(r"\{\s*" + symbol + r"\s*\}", "{}", content)
    return content

for filename in os.listdir(screens_dir):
    if not filename.endswith(".tsx"): continue
    filepath = os.path.join(screens_dir, filename)
    with open(filepath, "r") as f: content = f.read()
    
    for sym in ["Anchor", "Bell", "Link", "Home", "ClipboardList", "BookOpen", "Bookmark", "User"]:
        content = remove_import(content, sym)
        
    content = re.sub(r"import\s*\{\s*\}\s*from\s*[\"']lucide-react[\"'];\s*", "", content)
    content = re.sub(r"import\s*\{\s*\}\s*from\s*[\"']react-router-dom[\"'];\s*", "", content)
    
    if filename == "BatchesScreen.tsx":
        content = re.sub(r"const filled = [\"']\"FILL\" 1[\"'];\s*", "", content)
        
    with open(filepath, "w") as f: f.write(content)
print("Done")
