class ContentfulPageConnector {
  public async getPageContent(slug: string[]) {
    const query = {
      'content_type': 'page',
      'fields.slug': slug.toString().replace(',', '/'),
      'include': 8,
      'limit': 1,
    }
    // return await this.getEntries(query)
    return ''
  }
}

export { ContentfulPageConnector }
