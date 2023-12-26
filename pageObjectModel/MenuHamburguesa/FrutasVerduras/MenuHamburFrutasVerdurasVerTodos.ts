import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburFrutasVerdurasVerTodos extends BasePage {

    readonly FRUTAS_VERDURAS_VER_TODOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRUTAS_VERDURAS_VER_TODOS = this.page.locator('//span[@class=\'vtex-store-link-0-x-label vtex-store-link-0-x-label--linkHeaderSubmenu\']')
    }

    async clickFrutasVerdurasVerTodos(): Promise<void> {
        await this.click(this.FRUTAS_VERDURAS_VER_TODOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburFrutasVerdurasVerTodos(): Promise<void> {
        await this.clickFrutasVerdurasVerTodos()
    }
}
