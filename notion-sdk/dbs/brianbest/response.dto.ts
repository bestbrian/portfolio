import { BrianbestResponse } from "./types"

export class BrianbestResponseDTO {
  __data: BrianbestResponse
  id: BrianbestResponse['id']
  title: BrianbestResponse['title']
  description: BrianbestResponse['description']
  parent: BrianbestResponse['parent']
  createdBy: BrianbestResponse['created_by']
  lastEditedBy: BrianbestResponse['last_edited_by']
  createdTime: BrianbestResponse['created_time']
  lastEditedTime: BrianbestResponse['last_edited_time']
  isInline: BrianbestResponse['is_inline']
  archived: BrianbestResponse['archived']
  url: BrianbestResponse['url']
  publicUrl: BrianbestResponse['public_url']
  properties: BrianbestPropertiesResponseDTO

  constructor(res: BrianbestResponse) {
    this.__data = res
    this.id = res.id
    this.title = res.title
    this.description = res.description
    this.parent = res.parent
    this.createdBy = res.created_by
    this.lastEditedBy = res.last_edited_by
    this.createdTime = res.created_time
    this.lastEditedTime = res.last_edited_time
    this.isInline = res.is_inline
    this.archived = res.archived
    this.url = res.url
    this.publicUrl = res.public_url
    this.properties = new BrianbestPropertiesResponseDTO(res.properties)
  }

  get cover() {
    return {
      type: this.__data.cover?.type,
      url: this.__data.cover?.type === 'external' ? this.__data.cover?.external?.url : this.__data.cover?.file?.url,
    }
  }

  get icon() {
    return {
      type: this.__data.icon?.type,
      url:
        this.__data.icon?.type === 'external'
          ? this.__data.icon?.external?.url
          : this.__data.icon?.type === 'file'
            ? this.__data.icon?.file?.url
            : undefined,
      emoji: this.__data.icon?.type === 'emoji' ? this.__data.icon?.emoji : undefined,
    }
  }
}
  
export class BrianbestPropertiesResponseDTO {
  __props: BrianbestResponse['properties']
  __data

  constructor(props: BrianbestResponse['properties']) {
    this.__props = props
    this.__data = {
      slug: this.__props['Slug'],
      tags: this.__props['Tags'],
      status: this.__props['Status'],
      title: this.__props['Title'],
      edited: this.__props['Edited'],
      created: this.__props['Created'],
    }
  }


  get slug() {
    return {
      text: this.__props['Slug']?.rich_text ? this.__props['Slug'].rich_text.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Slug']?.rich_text ? this.__props['Slug'].rich_text.filter((item) => item.href?.length).map((item) => item.href) : [],
      rich_text: this.__props['Slug']?.rich_text,
    }
  }
  get tags() {
    return {
      values: this.__props['Tags']?.multi_select ? this.__props['Tags'].multi_select.map((item) => item.name) : [],
      multi_select: this.__props['Tags']?.multi_select,
    }
  }

  get status() {
    return this.__props['Status']?.status
  }

  get title() {
    return {
      text: this.__props['Title']?.title ? this.__props['Title'].title.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Title']?.title ? this.__props['Title'].title.filter((item) => item.href?.length).map((item) => item.href) : [],
      title: this.__props['Title']?.title,
    }
  }

  get edited() {
    return this.__props['Edited']?.last_edited_time
  }

  get created() {
    return this.__props['Created']?.created_time
  }
}
