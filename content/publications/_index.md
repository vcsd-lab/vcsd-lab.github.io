---
title: Publications
type: landing


cascade:
  share: false
  commentable: false
  editable: false

sections:
  - block: markdown
    content:
      title: 近期發表研究
      text: |
        <div class="pub-toolbar">
          <div class="pub-filters">
            <button type="button" class="pub-filter-btn active" data-filter="all">全部</button>
            <button type="button" class="pub-filter-btn" data-filter="conference">會議</button>
            <button type="button" class="pub-filter-btn" data-filter="journal">期刊</button>
            <button type="button" class="pub-filter-btn" data-filter="preprint">預印本</button>
            <button type="button" class="pub-filter-btn" data-filter="report">報告</button>
            <button type="button" class="pub-filter-btn" data-filter="book">書籍</button>
          </div>

          <div class="pub-sort">
            <button type="button" class="pub-sort-btn active" data-sort="desc">最新</button>
            <button type="button" class="pub-sort-btn" data-sort="asc">最舊</button>
          </div>
        </div>

        <script src="/js/publications.js"></script>

  - block: collection
    content:
      count: 0
      sort_by: date
      sort_ascending: false
    design:
      view: citation
---
