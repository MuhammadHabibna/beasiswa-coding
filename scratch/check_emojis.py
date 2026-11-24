import os
import re

# Comprehensive emoji pattern
emoji_pattern = re.compile(
    "["
    "\U0001F600-\U0001F64F"  # emoticons
    "\U0001F300-\U0001F5FF"  # symbols & pictographs
    "\U0001F680-\U0001F6FF"  # transport & map symbols
    "\U0001F1E0-\U0001F1FF"  # flags (iOS)
    "\U00002702-\U000027B0"
    "\U000024C2-\U0001F251"
    "\U0001F900-\U0001F9FF"  # supplemental symbols
    "\U0001FA70-\U0001FAFF"  # symbols and pictographs extended-a
    "\U00002600-\U000026FF"  # miscellaneous symbols
    "\U00002B00-\U00002BFF"
    "\U00002300-\U000023FF"
    "]+", flags=re.UNICODE
)

root_dir = "src"
found = []

for dirpath, _, filenames in os.walk(root_dir):
    for f in filenames:
        path = os.path.join(dirpath, f)
        try:
            with open(path, "r", encoding="utf-8") as file:
                lines = file.readlines()
                for idx, line in enumerate(lines, 1):
                    emojis = emoji_pattern.findall(line)
                    if emojis:
                        found.append((path, idx, emojis, line.strip()))
        except Exception as e:
            print(f"Error reading {path}: {e}")

if found:
    print(f"FOUND {len(found)} emoji instances:")
    for path, idx, emojis, line in found:
        print(f"{path}:{idx} -> {emojis} -> {line}")
else:
    print("ALL CLEAN: 0 emojis found in src/")
