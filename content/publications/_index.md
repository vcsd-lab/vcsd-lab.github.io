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
      title: Publications
      text: |
        <div class="pub-toolbar">
          <div class="pub-filters">
            <button type="button" class="pub-filter-btn active" data-filter="all">All</button>
            <button type="button" class="pub-filter-btn" data-filter="conference">Conference</button>
            <button type="button" class="pub-filter-btn" data-filter="journal">Journal</button>
            <button type="button" class="pub-filter-btn" data-filter="preprint">Preprint</button>
            <button type="button" class="pub-filter-btn" data-filter="report">Report</button>
            <button type="button" class="pub-filter-btn" data-filter="book">Book</button>
          </div>

          <div class="pub-sort">
            <button type="button" class="pub-sort-btn active" data-sort="desc">Newest</button>
            <button type="button" class="pub-sort-btn" data-sort="asc">Oldest</button>
          </div>
        </div>

        <script src="/js/publications.js"></script>

  - block: collection
    content:
      sort_by: date
      sort_ascending: false
    design:
      view: citation
---
