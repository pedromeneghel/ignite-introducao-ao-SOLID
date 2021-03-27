FROM node AS dev

CMD cd "/application" && \
  yarn && \
  yarn dev
