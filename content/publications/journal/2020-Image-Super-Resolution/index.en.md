---
title: "Image Super-Resolution Using Capsule Neural Networks"

authors:
  - "Jui-Ting Hsu"
  - "Chih-Hung Kuo"
  - "De-Wei Chen"


date: 2020-01-06
tags: ["journal"]

publication: "IEEE Access ( Volume: 8)"

abstract: |
  Convolutional neural networks (CNNs) have been widely applied in super-resolution (SR) and other image restoration tasks. Recently, Hinton et al. proposed capsule neural networks to resolve the problem of viewpoint variations in image classification tasks. Each capsule is represented as either a vector or a matrix to encode more object information, such as position, size, direction, etc. Instead of detecting specific features, these capsule neural networks search for the most relevant features using an iterative process. Therefore, capsule neural networks require fewer parameters compared to traditional neural networks. Inspired by these advances, we make use of a capsule neural network to exploit more potential features for image SR. In this paper, we develope two frameworks: the Capsule Image Restoration Neural Network (CIRNN) and the Capsule Attention and Reconstruction Neural Network (CARNN), to incorporate capsules into image SR convolutional neural networks. The CIRNN takes advantage of the rich information encoded in the capsules to reconstruct accurate high-resolution images. The CARNN generates SR attention features by utilizing the robust segmentation capability of the capsules. Our experiments show that both frameworks can enhance SR for most testing datasets. The CIRNN performs better than the CARNN and can achieve better performance than other traditional CNN methods with a similar amount of parameters.


links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/8950449
---
