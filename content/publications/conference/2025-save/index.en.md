---
title: "SAVE: Systolic Array-Based Accelerator for Vision Transformer with Efficient Tiling Strategy"

authors:
  - "Yu-Chi Wu"
  - "Chih-Hung Kuo"
  - "Che-Wei Tsui"

date: 2025-04-21
tags: ["conference"]

publication: "2025 International VLSI Symposium on Technology, Systems and Applications (VLSI TSA)"

abstract: |
  In this work, we propose a Vision Transformer (ViT) hardware accelerator that can achieve high utilization and high efficiency. Unlike the convolutional neural network (CNN) models, ViTs do not have operations such as concatenation or pooling that change the feature dimensions. This makes it easier than CNN accelerators to estimate the required on-chip memory size for storing the feature maps. Therefore, as long as the on-chip memory size is sufficiently large, we can store all the output data of one layer in on-chip memory without sending data back to off-chip DRAM. However, simply increasing the size of SRAM would result in area overhead. Therefore, we propose a block-based tiling strategy to reduce the space for storing intermediate matrices. By dividing a matrix into tiles and computing them sequentially in the Feed-Forward Network Residual Block (FFN Resblock), we process the partial results immediately without buffering. This approach saves on-chip memory, as buffering the substantial “intermediate results” of each block would waste hardware resources. As a result, the storage requirements are significantly reduced. Compared to the previous accelerators, the proposed design improves the performance up to 5.59× in the ViT-Base model.

links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/11047111
---
