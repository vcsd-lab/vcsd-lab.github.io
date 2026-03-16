---
title: "Fast Read Pre-mapping Filtering for Short Variations Detection in Gene Sequences Using In-Memory Search Technology"

authors:
  - "Chun-Hsien Ho"
  - "Wei-Ting Lu"
  - "Wen-Kai Wang"
  - "Cheng-Yuan Lin"
  - "Chih-Hung Kuo"
  - "Lih-Yih Chiou"

date: 2025-10-16
tags: ["conference"]

publication: "2025 IEEE Biomedical Circuits and Systems Conference (BioCAS)"

abstract: |
    To accelerate time consuming process for DNA alignment we propose a pre-
    mapping filtering method, called the Same Token Count (STC), that leverages
    the high parallelism of In-Memory Search (IMS) technology. We directly 
    identify all reads associated with reference positions containing short 
    variations. STC operates in two stages: offline and processing. In the 
    offline stage, read sequences are encoded into bitvectors based on k-mers;
    in the processing stage, these bitvectors are efficiently matched by IMS to
    assess sequence similarity. This method achieves a speed up of $$150×$$ 
    compared to traditional CPU-based methods for detecting a single short 
    variation.
  

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/11327463
---
