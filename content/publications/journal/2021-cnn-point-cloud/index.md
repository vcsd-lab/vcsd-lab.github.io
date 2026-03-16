---
title: "CNN-Based Classification for Point Cloud Object With Bearing Angle Image"

authors:
  - "Chien-Chou Lin"
  - "Chih-Hung Kuo"
  - "Hsin-Te Chiang"

date: 2021-11-23
tags: ["journal"]

publication: "IEEE Sensors Journal ( Volume: 22, Issue: 1, 01 January 2022)"

abstract: |
  Convolutional neural network (CNN), one of the branches of deep neural networks, has been widely used in image recognition, natural language processing, and other related fields with great success recently. This paper proposes a novel framework with CNN to classify objects in a point cloud captured by LiDAR on urban streets. The proposed BA-CNN algorithm is composed of five steps: (i) removing ground points, (ii) clustering objects, (iii) transforming to bearing angle images, (iv) ROI selection, and (V) identifying objects by CNN. In the first step, ground points are removed by the multi-threshold-based ground detection to reduce the processing time. Then, a flood-fill-based clustering method is used for object segmentation. Those individual point cloud objects are converted to bearing angle (BA) images. Then, a well-trained CNN is used to classify objects with BA images. The main contribution of this paper is proposing an efficient recognition method that uses the information from point clouds only. In contrast, because most 3D object classifiers use the fusion of point clouds and color images, their models are very complicated and take a colossal amount of memory to store the parameters. Since the ground point detection and object clustering process all points along with the scanline-major order and layer-major order, the proposed algorithm performs better in terms of time consumption and memory consumption. In the experiment, three scenes from KITTI dataset are used for training and testing the proposed BA-CNN classifier, and the proposed BA-CNN achieves high classification accuracy.


links:
  - name: IEEE Access
    url: https://ieeexplore.ieee.org/document/9625924
---
