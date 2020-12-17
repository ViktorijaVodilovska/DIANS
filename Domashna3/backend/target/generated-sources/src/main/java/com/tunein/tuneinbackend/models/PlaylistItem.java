package com.tunein.tuneinbackend.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * PlaylistItem
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2020-12-17T23:24:00.447004300+01:00[Europe/Berlin]")
public class PlaylistItem   {
  @JsonProperty("name")
  private String name = null;

  @JsonProperty("link")
  private String link = null;

  public PlaylistItem name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Italy", value = "")
  
    public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public PlaylistItem link(String link) {
    this.link = link;
    return this;
  }

  /**
   * Get link
   * @return link
  **/
  @ApiModelProperty(example = "https://open.spotify.com/playlist/350oMhiKF6hIqQW9vkM9PF", value = "")
  
    public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PlaylistItem playlistItem = (PlaylistItem) o;
    return Objects.equals(this.name, playlistItem.name) &&
        Objects.equals(this.link, playlistItem.link);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, link);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PlaylistItem {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    link: ").append(toIndentedString(link)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
