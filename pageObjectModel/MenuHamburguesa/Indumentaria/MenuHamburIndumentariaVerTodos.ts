import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaVerTodos extends BasePage {

    readonly INDUMENTARIA_VER_TODOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INDUMENTARIA_VER_TODOS = this.page.locator("//span[@class='vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu']")
    }

    async clickIndumentariaVerTodos(): Promise<void> {
        await this.click(this.INDUMENTARIA_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburIndumentariaVerTodos(): Promise<void> {
        await this.clickIndumentariaVerTodos()
    }
}
