#!/bin/bash
find content/publications -type f -name "index.md" | while read f; do
  dir="$(dirname "$f")"
  if [ ! -f "$dir/index.en.md" ]; then
    cp "$f" "$dir/index.en.md"
    echo "Created $dir/index.en.md"
  fi
done
