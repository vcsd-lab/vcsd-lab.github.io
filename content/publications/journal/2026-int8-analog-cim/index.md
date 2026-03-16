---
title: "A Fully Analog Computing-in-memory Macro with INT8-MAC Operations for Edge-AI Device"

authors:
  - "Wei-Cheng Huang"
  - "Hsin-Ta Chien"
  - "Soon-Jyh Chang"
  - "Jia-Hao Hu"
  - "Chih-Hung Kuo"

date: 2026-01-22
tags: ["journal"]

publication: "IEEE Journal on Emerging and Selected Topics in Circuits and Systems"

abstract: |
  Sensors capture large volumes of data containing both critical and redundant information for neural network (NN) inference. However, limited bandwidth and energy efficiency at the sensor-side analog-to-digital conversion (ADC) and data transmission stages significantly increase latency and power consumption in edge devices. Conventional data compression can reduce data volume but cannot distinguish which information is important for the NNs, especially in early layers, where precision is highly sensitive. Such distortions propagate and degrade the overall inference accuracy. To address these challenges, this paper proposes a fully analog computing-in-memory (FACIM) macro that implements and experimentally demonstrates analog-domain feature extraction and inter-layer analog signal propagation mechanisms for NNs. Unlike conventional CIM architectures that rely on inter-layer ADCs, the FACIM concept performs feature extraction directly in the analog domain, thereby reducing early-stage quantization effects and unnecessary data movement. This approach provides a potential pathway toward improved energy efficiency in edge-AI systems. The FACIM macro was fabricated using TSMC 0.18-μm CMOS 1P6M standard technology. It achieves an energy efficiency of 1,880 TOPS/W for INT8 multiply-and-accumulate (MAC) operations and 117 TOPS/W at the system level. The macro demonstrates an area efficiency of 97.76 GOPS/mm² (normalized macro area [1]).

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/11361022
---
