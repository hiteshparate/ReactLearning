import React, { Component } from 'react'

export class FormforList extends Component {
    render() {
        return (
            <div>
                <form className="form-group">
                    <div class="form-group">
                      <label for="list"></label>
                      <input type="text"
                          class="form-control form-control-sm" name="list" id="list" aria-describedby="helpId" placeholder="Add To" />

                    </div>
                </form>
            </div>
        )
    }
}

export default FormforList
